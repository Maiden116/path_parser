import express from 'express';
const appRoutes = express()

appRoutes.post('/parsepath' , (req, res) => {

    const body = req.body;
    const urlFormat = body.url_format;
    const url = body.url;
    let indexes = {};

    const [urlSplited, urlParameters ] = url.split('?');
    const urlParametersSplited = urlParameters.split('&');
    const urlIdexesSplited = urlSplited.split('/');

    const splitedIndexes = urlFormat.split('/');
    for (let index = 1; index < splitedIndexes.length; index++) {
        const element = splitedIndexes[index];
        if(element.includes(':')) {
            indexes[element.replace(":","")] = urlIdexesSplited[index];
        }
    }

    for (let index = 0; index < urlParametersSplited.length; index++) {
        const element = urlParametersSplited[index];
        const elementSplited = element.split("=")
        const [key, value] = elementSplited
        indexes[key] = value;
    }

    res.send(
        indexes
    );

})

export {appRoutes}