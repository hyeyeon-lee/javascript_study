'use strict'

test(false);

async function test (is) {
    try {
        if(is) return
        const data = await getPromise(1)
        console.log(data);
    } catch (e) {
        console.error(e)
    }
}

function getPromise (param) {
    return new Promise((resolve, reject) => {
        if(param === 1) setTimeout(()=> {
            resolve(1)
        }, 1000)
        else reject("error");
    })
}