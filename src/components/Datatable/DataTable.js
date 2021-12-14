import React from 'react';
import './DataTable.scss'

const DataTable = ({calc}) => {
    const productACost = calc.product1_price * calc.exrate;
    const productBCost = calc.product2_price * calc.exrate;
    const productCCost = calc.product3_price * calc.exrate;
    const totalcost = productACost + productBCost + productCCost;

    const productASales = calc.product1_salesprice;
    const productBSales = calc.product2_salesprice;
    const productCSales = calc.product3_salesprice;
    const totalsales =
    productASales + productBSales + productCSales;

    const productAProfit = productASales - productACost;
    const productBProfit = productBSales - productBCost;
    const productCProfit = productCSales - productCCost;
    const totalprofit = productAProfit + productBProfit + productCProfit;
    return (
        <table style={{marginTop:"3rem"}} class="steelBlueCols">
        <thead>
        <tr>
        <th colspan="3">၀ယ်စျေး</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td style={{width:"35%"}}>Product A</td>
        <td>{calc.product1_price} $</td>
        <td>( {calc.product1_price}*{calc.exrate} ) {productACost} MMK </td>
        </tr>
        <tr>
        <td>Product B</td>
        <td>{calc.product2_price} $</td>
        <td>( {calc.product2_price}*{calc.exrate} ) {productBCost} MMK </td>
        </tr>
        <tr>
        <td>Product C</td>
        <td>{calc.product3_price} $</td>
        <td>( {calc.product3_price}*{calc.exrate} ) {productCCost} MMK </td>
        </tr>
        <tr>
        <td>အရင်းပေါင်း</td>
        <td></td>
        <td>{totalcost} MMK </td>
        </tr>
        </tbody>


        <thead>
        <tr>
        <th colspan="3">ရောင်းစျေး</th>
        </tr>
        </thead>
        <tbody>
            <tr>
            <td>Product A</td>
            <td></td>
            <td>{calc.product1_salesprice} MMK </td>
            </tr>
            <tr>
            <td>Product B</td>
            <td></td>
            <td>{calc.product2_salesprice} MMK </td>
            </tr>
            <tr>
            <td>Product C</td>
            <td></td>
            <td>{calc.product3_salesprice} MMK </td>
            </tr>
            <tr>
            <td>ရောင်းစျေးစုစုပေါင်း</td>
            <td></td>
            <td>{totalsales} MMK </td>
            </tr>
        </tbody>
        <thead>
        <tr>
        <th colspan="3">အမြတ်</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Product A</td>
            <td>({productASales} - {productACost}) MMK</td>
            {productAProfit.toString().includes("-")
            ?<td style={{color:"red"}}>{productAProfit} MMK</td>
            :<td>{productAProfit} MMK</td>}
        </tr>
        <tr>
            <td>Product B</td>
            <td>({productBSales} - {productBCost}) MMK</td>
            {productBProfit.toString().includes("-")
            ?<td style={{color:"red"}}>{productBProfit} MMK</td>
            :<td>{productBProfit} MMK</td>}
        </tr>
        <tr>
            <td>Product C</td>
            <td>({productCSales} - {productCCost}) MMK</td>
            {productCProfit.toString().includes("-")
            ?<td style={{color:"red"}}>{productCProfit} MMK</td>
            :<td>{productCProfit} MMK</td>}
        </tr>
        <tr>
            <td>အမြတ်ပေါင်း</td>
            <td></td>
            {totalprofit.toString().includes("-")
            ?<td style={{color:"red"}}>{totalprofit} MMK</td>
            :<td>{totalprofit} MMK</td>}
        </tr>
        </tbody>
        </table>

    )
}

export default DataTable;