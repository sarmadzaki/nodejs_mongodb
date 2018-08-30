

export const login = (req, res) => {
    let { email, password } = req.body
    console.log(email,password);
    return res.json({success: true, message: "login route!!"})
}