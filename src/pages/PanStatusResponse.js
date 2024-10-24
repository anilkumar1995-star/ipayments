import React from "react"

const PanStatusResponse = (props) => {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Status Code</th>
                        <th>Status</th>
                        <th>Message</th>
                    </tr>
                    <tr>
                        <td>000</td>
                        <td>Success</td>
                        <td>Pan Card Payment Successful</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Failed</td>
                        <td>Pan Card Failed</td>
                    </tr>
                    <tr>
                        <td>999</td>
                        <td>Pending</td>
                        <td>Pan Card Pending</td>
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

export default PanStatusResponse