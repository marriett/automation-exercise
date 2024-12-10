export default {
    password: function() {
        let result = ''
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'
        const length = chars.length

        for (let i = 0; i < 6; i++) {
            result+= chars.charAt(Math.floor(Math.random() * length))
        }

        return result
    }
}