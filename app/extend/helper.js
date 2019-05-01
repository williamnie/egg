exports.success = ({ ctx, res = null, success = true }) => {
    ctx.body = {
        code: 0,
        data: res,
        success
    },
        ctx.status = 200
}