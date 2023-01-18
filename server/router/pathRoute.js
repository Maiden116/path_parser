import express from 'express';
const appRoutes = express()

appRoutes.post('/parsepath' , (req, res) => {

    const body = req.body;
    const urlFormat = body.url_format;
    const url = body.url;
    let indexes = {};

    const urlSplited = url.split('?')[0];
    const urlParameters = url.split('?')[1];
    const urlParametersSplited = urlParameters.split('&');
    const urlIdexesSplited = urlSplited.split('/');

    const urlFormatSplited = urlFormat.split('?')[0];
    const splitedIndexes = urlFormatSplited.split('/');
    for (let index = 1; index < splitedIndexes.length; index++) {
        const element = splitedIndexes[index];
        if(element.includes(':')) {
            indexes[element.replace(":","")] = urlIdexesSplited[index];
        }
    }

    for (let index = 0; index < urlParametersSplited.length; index++) {
        const element = urlParametersSplited[index];
        indexes[element.split("=")[0]] = element.split("=")[1];
    }

    res.send(
        indexes
    );

})

export {appRoutes}