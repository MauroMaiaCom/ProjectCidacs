type MuniProps = {
  text: String;
}

import posts from '../assets/csvjson.json';
import { Dgeral, Doone, DoTwo } from '../styles/style_01';
import { Chart } from "react-google-charts";


export function Datrec(props: MuniProps) {

  let objt = props.text;

  console.log(objt);

  function respoh(city: any){
    return  city.MUN == objt
  }
  const result = posts.filter(respoh);


 
  if(result[0]){
    const final = result[0];  


    const data = [
      ["Atualmente", "População", "% c/ saneamento Basico", "IDHM", "IDHM Renda", "IDHM Longevidade", "IDHM Educação", "Popul. Masc. com 80 anos ou +", "Taxa de Envelhecimento", "Popul. Fem. com 80 anos ou +", "Popul. em domicílios vulneráveis e c/ idoso"],
      ["2010", final.V1, final.V2, final.V3, final.V4, final.V5, final.V6, final.V7, final.V8, final.V9, final.V10],
    ];
    
    const options = {
      chart: {
        title: "Programa Cidacs",
        subtitle: "Project Mauro J. Maia",
      },
    };


    return(

      <Dgeral>
        <Doone>

          <h1>Cidade: {objt}</h1>        
          <h1>Habitantes: {final.V1}</h1>

        </Doone>
        <DoTwo>

          <Chart 
            chartType="Bar"
            width="100%"
            height="90%"
            data={data}
            options={options}
          />

        </DoTwo>

      </Dgeral>

    );

  }else{

    const final = 'Pesquise';

    return(

      <Dgeral>
        <Doone>

          <h1>Cidade: {final}</h1>        
          <h1>Habitantes: {final}</h1>

        </Doone>
        <div>

          

        </div>

      </Dgeral>

    );

  }
}