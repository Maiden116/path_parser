import express from 'express';
const appRoutes = express()

const cleanIndex = (index) => index.replace(':','');
const isIndex = (index) => index.includes(':');

const getIndexes = (indexes, values ) => {
     return indexes.reduce((accumulator, key, index) => {
        if(isIndex(key)){
            return {...accumulator, [cleanIndex(key)]: values[index]};
        }
        return {...accumulator}
      }, {});
}

const splitParam = (param)=> param.split("=");

appRoutes.post('/parsepath' , (req, res) => {

    const body = req.body;
    const urlFormat = body.url_format;
    const url = body.url;
    
    const [urlSplited, urlParameters ] = url.split('?');
    const urlParametersSplited = urlParameters.split('&');
    const urlIdexesSplited = urlSplited.split('/');

    const splitedIndexes = urlFormat.split('/');
    const indexes = getIndexes(splitedIndexes,urlIdexesSplited);

    urlParametersSplited.forEach((element, index) => {        
        const [key, value] = splitParam(urlParametersSplited[index]);
        indexes[key] = value;
    })

    res.send(
        indexes
    );

})

export {appRoutes}