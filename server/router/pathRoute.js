import express from 'express';
const appRoutes = express()

appRoutes.post('/parsepath' , (req, res) => {

    const body = req.body;
    const urlFormat = body.url_format;
    const url = body.url;
    

    const [urlSplited, urlParameters ] = url.split('?');
    const urlParametersSplited = urlParameters.split('&');
    const urlIdexesSplited = urlSplited.split('/');

    const splitedIndexes = urlFormat.split('/');
    const indexes = splitedIndexes.reduce((accumulator, key, index) => {
        if(key.includes(':')){
            return {...accumulator, [key.replace(':','')]: urlIdexesSplited[index]};
        }
        return {...accumulator}
      }, {});

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