import { Container } from "./container";
import "./table.css";

export const Table = () => {
  const data = [
    {
      id	:	59,
      title	:	'Spring and summershoes',
      price	:	20,
      quantity	:	3,
      total	:	60,
      discountPercentage	:	8.71,
      discountedPrice	:	55,
    },
    {
      id	:	88,
      title	:	'TC Reusable Silicone Magic Washing Gloves',
      price	:	29,
      quantity	:	2,
      total	:	58,
      discountPercentage	:	3.19,
      discountedPrice	:	56,
    }, 
    {
      id	:	18,
      title	:	'Oil Free Moisturizer 100ml',
      price	:	40,
      quantity	:	2,
      total	:	80,
      discountPercentage	:	13.1,
      discountedPrice	:	70,
    },
    {
      id	:	95,
      title	:	'Wholesale cargo lashing Belt',
      price	:	930,
      quantity	:	1,
      total	:	930,
      discountPercentage	:	17.67,
      discountedPrice	:	766,
    },
    {
      id	:	39,
      title	:	'Women Sweaters Wool',
      price	:	600,
      quantity	:	2,
      total	:	1200,
      discountPercentage	:	17.2,
      discountedPrice	:	994,
    },
    {
      id	:	96,
      title	:	'lighting ceiling kitchen',
      price	:	30,
      quantity	:	2,
      total	:	60,
      discountPercentage	:	14.89,
      discountedPrice	:	51,
    },
    {
      id	:	91,
      title	:	'Black Motorbike',
      price	:	569,
      quantity	:	3,
      total	:	1707,
      discountPercentage	:	13.63,
      discountedPrice	:	1474,
    },
    {
      id	:	9,
      title	:	'Infinix INBOOK',
      price	:	1099,
      quantity	:	1,
      total	:	1099,
      discountPercentage	:	11.83,
      discountedPrice	:	969,

    }
  ];

  const renderRows = () => data.map(el => <tr className='col_data_row' key={el.id}>
    <td className='col_data'>{el.title}</td>
    <td className='col_data'>{el.price}</td>
    <td className='col_data'>{el.quantity}</td>
    <td className='col_data'>{el.discountPercentage}</td>
    <td className='col_data'>{el.discountedPrice}</td>
  </tr>)

  return (
    <Container 
      width="70%"
      styleProps={{
          overflowX: 'auto'
      }}
    >
      <table id='table'>
        <thead className='table_head'>
          <tr className='table_row'>
            <th className='col_heading'>Title</th>
            <th className='col_heading'>Price</th>
            <th className='col_heading'>Quantity</th>
            <th className='col_heading'>Discount Percentage</th>
            <th className='col_heading'>Discount Price</th>
          </tr>
        </thead>
        <tbody className='table_body'>
          {renderRows()}
        </tbody>
      </table>
    </Container>
  );
}