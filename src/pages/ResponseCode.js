import React from "react"

const ResponseCode = (props) => {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Status Code</th>
                        <th>Status</th>
                        <th>Message</th>
                    </tr>
                    {
                        props?.data && props.data.map((item, idx) => {
                            return (
                                <tr key={idx * 8}>
                                    <td>{item.StatusCode}</td>
                                    <td>{item.Status}</td>
                                    <td>{item.Message}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ResponseCode