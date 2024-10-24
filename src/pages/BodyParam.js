import React from "react"

const BodyParams = (props) => {

    return (
        <div id="outer">
            {
                props?.data && props.data.map((item, idx) => {
                    return (
                        <div className="inner" key={idx * 4}>
                            <b style={{ fontSize: "16px" }}>{item.Parameter}</b><small>&nbsp; ({item.DataType}) &nbsp;</small>
                            <span style={{ color: "red", fontSize: "15px" }}> {item.Required} </span> <br />
                            {item?.isValueHtml === true && <>
                                <span style={{ fontWeight: "550", fontSize: "14px", wordSpacing: "2px" }} dangerouslySetInnerHTML={{ __html: item.value }} />
                                <span style={{ fontWeight: "550", fontSize: "14px", wordSpacing: "2px" }}>{item.MaxLength && `(Max Length: ${item.MaxLength})`}</span>
                            </>}
                            {item?.isValueHtml !== true && <span style={{ fontWeight: "550", fontSize: "14px", wordSpacing: "2px" }}>{item.value} {item.MaxLength && `(Max Length: ${item.MaxLength})`}</span>}

                            {/* <span style={{ fontWeight: "550", fontSize: "14px", wordSpacing: "2px" }}>Max Length: {item.MaxLength}</span> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BodyParams