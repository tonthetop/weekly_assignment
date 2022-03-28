async function waitAndMaybeReject() {
    await new Promise((resolve, reject) => {
        setTimeout(resolve("success"), 1000)
    });
    throw Error("This is error")
}
async function test1() {
    try {
        return await waitAndMaybeReject() // dư await 
    } catch (error) {
        return "Oh no" + error.message //đúng sau khi waitAndMaybeReject ném lỗi xuống sẽ trả về tại đây
    }
}

async function test2() {
    try {
        return await waitAndMaybeReject() // dư  await 
    } catch (error) {
        throw (error) //Sai thay vì xử lý thì lại ném xuống main nhưng main lại kh có catch lỗi
    }
}
async function test3() {
    return await waitAndMaybeReject() // dư await
        //Thiếu catch lỗi
}
async function test4() {
    return waitAndMaybeReject() // đúng
        //Thiếu cacth lỗi

}
const main = async() => {
    const value = await test1()
    console.log("value: " + value)
}
main()