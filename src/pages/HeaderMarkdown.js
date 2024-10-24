import React from "react"

const HeaderMarkdown = (props) => {
    return (
        <div id="outer">
            {
                props?.data && props.data.map((item, idx) => {
                    return (
                        <div className="inner" key={idx * 7}>
                            <b style={{ fontSize: "16px" }}>{item.Params}</b><small>&nbsp; ({item.DataType}) &nbsp;</small>
                            <span style={{ color: "red", fontSize: "15px" }}> {item.Required} </span> <br />
                            <span style={{ fontWeight: "550", fontSize: "15px" }}>{item.value} </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HeaderMarkdown