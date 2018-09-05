export const errorRoute = (req, res)=> {
	return res.send({status:400, message:'No valid route found!'});
}