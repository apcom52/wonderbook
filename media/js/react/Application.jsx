import React from 'react';
import ReactDom from 'react-dom';
import TopBar from 'TopBar';
import AppScreen from 'AppScreen';
import AppTabs from 'AppTabs';
import CollectionList from "./CollectionList";
import BooksList from "./BooksList";
import {HashRouter, Route} from 'react-router-dom';

console.log('hello, world!');

ReactDom.render(
    <div>
        <TopBar />
        <HashRouter>
            <AppScreen>
                <AppTabs/>
                <Route exact path="/" component={CollectionList} />
                <Route path="/library/" component={BooksList} />
            </AppScreen>
        </HashRouter>

    </div>,
    document.getElementById('application')
);