import BarChart from 'chart-race-react';
import data from './data.js';


const randomColor = () => {
    return `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255})`;
  }
  
  const len = data[Object.keys(data)[0]].length;
  const keys = Object.keys(data);
  const colors = keys.reduce((res, item) => ({ 
      ...res, 
      ...{ [item]: randomColor() } 
  }), {});
  
  const labels = keys.reduce((res, item, idx) => {
    return{
    ...res, 
    ...{[item]: (
      <div style={{textAlign:"center",}}>
        <div>{item}</div>
      </div>
      )}
  }}, {});
  
  console.log(labels)
const time = ['2022-07','2022-08','2022-09','2022-10','2022-11','2022-12','2023-01','2023-02']
  
const Chart = () => {
  return (
    <div style={{width: "800px"}}>
    <BarChart 
        start={true}
        data={data} 
        timeline={time}
        labels={labels}
        colors={colors}
        len={len}
        timeout={1000}
        delay={1000}
        timelineStyle={{
          textAlign: "center",
          fontSize: "40px",
          color: "rgb(148, 148, 148)",
          marginBottom: "100px"
        }}
        textBoxStyle={{
          textAlign: "right",
          color: "rgb(133, 131, 131)",
          fontSize: "20px",
          marginLeft: '50px'
        }}
        barStyle={{
          height: "30px",
          marginTop: "10px",
          borderRadius: "10px",
        }}
        width={[20, 70, 10]}
    />
</div>
  )
}

export default Chart