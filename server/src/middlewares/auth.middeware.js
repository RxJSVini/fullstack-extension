module.exports = ({
    Auth:async function(req, res, next){
        console.log('Deu xerto');
        next();
    }
});