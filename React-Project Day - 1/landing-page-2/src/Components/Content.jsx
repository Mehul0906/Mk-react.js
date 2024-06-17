import React from "react"

function Content() {
    return (
        <div className="main" style={{ display: "flex" }}>
            <div className="mid2" style={{ width: "50%", padding: "30px 50px" }}>
                <h1 style={{ margin: "0", fontSize: "30px", fontWeight: "500", color: "black" }}>Header Footer</h1>
                <h5 style={{ margin: "0", color: "black" }}>POPULAR HOUSE PLANT</h5>
                <h2 style={{ fontSize: "40px", fontWeight: "500", color: "balck" }}>$18</h2>
                <p style={{ marginBottom: "30px", color: "black" }}>Classic peace Lily is a spathiphyllum floor palnt arranged in a bamboo planter with a blue
                    and re ribbom and butterfly pick</p>
            </div>
            <div className="" style={{ width: "55%", display: "flex", justifyContent: "center", padding: "30px 0" }}>
                <img src="https://img.freepik.com/premium-photo/young-woman-casual-peach-orange-eyeglasses-sweater-isolated-green-olive-wall-excited-keeping-mouth-open-spreading-hands_343596-5228.jpg?w=1060" style={{ height: "550px", width: "85%" }}></img>
            </div>

        </div>
    )
}
export default Content