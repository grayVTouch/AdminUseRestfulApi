const main = `${topContext.api}detectionModule/module`;
const detail = `${topContext.api}detectionModule/module/?`;
const all = `${topContext.api}detectionModule/all`;
const image = `${topContext.api}detectionModule/image`;

export default {
    list (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    detail (id , success , error) {
        return G.ajax({
            url: detail.replace('?' , id) ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    edit (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'patch' ,
            success ,
            error
        });
    } ,

    add (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    del (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'delete' ,
            success ,
            error
        });
    } ,

    all (success , error) {
        return G.ajax({
            url: all ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    image (data , success , error) {
        return G.ajax({
            url: image ,
            method: 'patch' ,
            data ,
            success ,
            error
        });
    } ,

};