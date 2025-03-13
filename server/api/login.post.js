export default defineEventHandler(async (event) => {
    // 获取请求体中的数据
    const { username, password } = await readBody(event);

    // 模拟登录逻辑
    if (username === 'admin' && password === '123456') {
        return {
            success: true,
            message: '登录成功',
            token: 'mock_token_123456' // 模拟返回的 token
        };
    } else {
        return {
            success: false,
            message: '用户名或密码错误'
        };
    }
});