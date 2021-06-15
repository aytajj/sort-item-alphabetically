import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { artistActions } from './action';
class Artists extends Component {
    state = {
        artist: []
    }
    async componentDidMount() {
        await this.props.fetchartistss();
        const { artists } = this.props;
        const artistsName = artists.songs.map((r, i) => (
            r.title
        ))
        artistsName.sort(function (a, b) {
            var nameA = a.toUpperCase();
            var nameB = b.toUpperCase(); 
            if (nameA < nameB) {
                return -1;
            }

        });
        this.setState({ artist: artistsName });
        console.log(this.state.artist)

    };

    renderItems = (r) => {
        let buffer = '';

        return r.map((c) => {

            const firstLetter = c.charAt(0).toUpperCase();

            if(firstLetter === buffer) {
                return <div className="category pb-3">
                    <ul className="values" >
                    <li>{c}</li>
                    </ul>
                </div>
            }

            buffer = firstLetter;

            return (
                <div className="category pb-3">
                    {<h3 className="letters">{firstLetter}</h3>}
                    <ul className="values" >
                        <li>{c}</li>
                    </ul>
                </div>
            );
        })
    }


    render() {
        const { artist} = this.state;
        return (
            <div id="content-wrap" >

                <div className="container-fluid mt-5 mb-5">
                    <div className="row">
                            <div className="category-wrap">
                                <div>
                                    {this.renderItems(artist)}
                                </div>

                            </div>

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    artists: state.artistReducer.artists
});
const mapDispatchToProps = {
    fetchartistss: artistActions.fetchartists,

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artists));