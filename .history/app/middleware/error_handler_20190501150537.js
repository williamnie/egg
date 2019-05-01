module.exports = (option, app) => {
    return async function (ctx, next) {
        const { headers } = ctx;
        try {
            await next()
        } catch (err) {
            app.emit('error', err, this)
            const status = err.status || 500
            const error = status === 422 && app.config.env === 'prod' && !headers.debug ?
                '网络错误' : err.message;
            ctx.body = {
                code: status,
                error,
                success: false
            }
            ctx.status = 200
        }
    }
}