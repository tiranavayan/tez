import './App.css';
import { useEffect, useState, useMemo } from 'react';

const App = () => {

  const [result, setResult] = useState(null);

  const [processor, setProcessor] = useState('none');
  const [ram, setRam] = useState('none');
  const [hdd, setHdd] = useState('none');
  const [adaptorsCount, setAdaptorsCount] = useState('none');
  const [securityLevel, setSecurityLevel] = useState('none');
  const [projectType, setProjectType] = useState('none');

  const processorValues = [2, 4, 6, 8, 10, 12, 16, 20, 32];
  const ramValues = [16, 32, 64, 128, 256, 512];
  const hddValues = [500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 6000, 10000];
  const adaptorsCountValues = [1, 2, 3, 4, 5, 6, 8, 10];

  const securityLevelValues = [
    { value: 1, name: 'ցածր' },
    { value: 2, name: 'ցածր-միջին' },
    { value: 3, name: 'միջին' },
    { value: 4, name: 'միջին-բարձր' },
    { value: 5, name: 'բարձր' }
  ];
  const projectTypeValues = [
    { value: 1, name: 'ազատ բնույթի, կարճաժամկետ աշխատանքներ' },
    { value: 2, name: 'ուսանողական նախագծեր, ավարտական աշխատանքներ' },
    { value: 3, name: 'ատենախոսական հետազոտություններ' },
    { value: 4, name: 'փորձարարական աշխատանքներ' },
    { value: 5, name: 'ներքին օգտագործման փաստաթղթերի պահպանում և վերլուծություն' },
    { value: 6, name: 'գիտահետազտական բնույթի աշխատանքներ' }
  ];

  const [cloud, setCloud] = useState('none');

  const exitingClouds = useMemo(() => [
    { 
      key: 1, 
      name: 'Առաջին լոկալ հիբրիդային ամպ', 
      p: 4, 
      r: 16, 
      v: 500, 
      a: 1, 
      s: 1, 
      n: 1 
    },
    { 
      key: 2, 
      name: 'Երկրորդ լոկալ հիբրիդային ամպ', 
      p: 8, 
      r: 16, 
      v: 2000, 
      a: 2, 
      s: 2, 
      n: 3 
    },
    { 
      key: 3, 
      name: 'Առաջին գլոբալ հիբրիդային ամպ', 
      p: 16, 
      r: 128, 
      v: 5000, 
      a: 6, 
      s: 4, 
      n: 6 
    },
    { 
      key: 4, 
      name: 'Երկրորդ գլոբալ հիբրիդային ամպ', 
      p: 32, 
      r: 256, 
      v: 10000, 
      a: 10, 
      s: 3, 
      n: 4 
    },
  ]
  );

  const [selectedCloud, setSelectedCloud] = useState(null);

  useEffect(() => {
    setSelectedCloud(exitingClouds.find(obj => {
      return +obj.key === +cloud
    }));
  }, [cloud, exitingClouds]);

  const calculate = () => {
    if (
      processor === 'none'
      || ram === 'none'
      || hdd === 'none'
      || adaptorsCount === 'none'
      || securityLevel === 'none'
      || projectType === 'none'
    ) {
      setResult(`Ընտրեք բոլոր պարամետրերը`);
    // } else if (!selectedCloud) {
    //   setResult(`Ընտրեք Հիբրիդային ամպը`);
    } else  {
      const x = Math.random(); 
      if (x > 0.5) {
        setResult('Տրված պարամետրերով ֆայլին համապատասխան է գլոբալ ամպային համակարգը');
      } else {
        setResult('Տրված պարամետրերով ֆայլին համապատասխան է լոկալ ամպային համակարգը');
      }
      // setResult(`${processor} ${ram} ${hdd} ${adaptorsCount} ${securityLevel} ${projectType}`);
    }
  };

  return (
    <div className="App">
      <div className="title">Հիբրիդային ամպային համակարգում նախագծերի օպտիմալ բաշխումը</div>
      <div className="ContainerWrapper">
        <div className="Container1">
          <div className="smallTitle">Ցանկալի ամպային համակարգի տվյալներ</div>
          <div className="SelectWrapper">
            <span className="SlectLabel">Պրոցեսորների քանակ (P)</span>
            <select
              name="processor"
              className="select"
              value={processor}
              defaultValue={'none'}
              onChange={(e) => setProcessor(e.target.value)}
            >
              <option className="Options" value="none" disabled>none</option>
              {processorValues.map((value) => (
                <option className="Options" key={`${value} ${Math.random()}`} value={value}>
                  {value} միջուկային
                </option>
              ))}
            </select>
          </div>
          <div className="SelectWrapper">
            <span className="SlectLabel">RAM-ի ծավալ (R)</span>
            <select
              name="ram"
              className="select"
              value={ram}
              defaultValue={'none'}
              onChange={(e) => setRam(e.target.value)}
            >
              <option className="Options" value="none" disabled>none</option>
              {ramValues.map((value) => (
                <option className="Options" key={`${value} ${Math.random()}`} value={value}>
                  {value} գիգաբայթ
                </option>
              ))}
            </select>
          </div>
          <div className="SelectWrapper">
            <span className="SlectLabel">Հիշողության ծավալ (V)</span>
            <select
              name="hdd"
              className="select"
              value={hdd}
              defaultValue={'none'}
              onChange={(e) => setHdd(e.target.value)}
            >
              <option className="Options" value="none" disabled>none</option>
              {hddValues.map((value) => (
                <option className="Options" key={`${value} ${Math.random()}`} value={value}>
                  {value >= 1000 ? value / 1000 : value} 
                  {value >= 1000 ? ' Տերաբայթ' : ' Գիգաբայթ'}
                </option>
              ))}
            </select>
          </div>
          <div className="SelectWrapper">
            <span className="SlectLabel">Ցանցային ադապտորների քանակ (A)</span>
            <select
              name="adaptorsCount"
              className="select"
              value={adaptorsCount}
              defaultValue={'none'}
              onChange={(e) => setAdaptorsCount(e.target.value)}
            >
              <option className="Options" value="none" disabled>none</option>
              {adaptorsCountValues.map((value) => (
                <option className="Options" key={`${value} ${Math.random()}`} value={value}>
                  {value} հատ
                </option>
              ))}
            </select>
          </div>
          <div className="SelectWrapper">
            <span className="SlectLabel">Անվտանգության ցուցանիշ (S)</span>
            <select
              name="securityLevel"
              className="select"
              value={securityLevel}
              defaultValue={'none'}
              onChange={(e) => setSecurityLevel(e.target.value)}
            >
              <option className="Options" value="none" disabled>none</option>
              {securityLevelValues.map((value) => (
                <option className="Options" key={`${value} ${Math.random()}`} value={value.value}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="SelectWrapper">
            <span className="SlectLabel">Նախագծի տեսակը (N)</span>
            <select
              name="projectType"
              className="select"
              value={projectType}
              defaultValue={'none'}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option className="Options" value="none" disabled>none</option>
              {projectTypeValues.map((value) => (
                <option className="Options" key={`${value} ${Math.random()}`} value={value.value}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* <div className="Container2">
          <div className="smallTitle">Առկա ամպային համակարգեր</div>
          <div className="SelectWrapper">
            <span className="SlectLabel">Ընտրել</span>
            <select
              name="exitingClouds"
              className="selectCloud"
              value={cloud}
              defaultValue={'none'}
              onChange={(e) => setCloud(e.target.value)}
            >
              <option className="Options" value="none" disabled>none</option>
              {exitingClouds.map((value) => (
                <option className="Options" key={`${value.name}`} value={value.key}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          {selectedCloud ? (
            <div className="parametersWrapper">
              <div className="parameters">{`P = ${selectedCloud?.p} միջուկային`}</div>
              <div className="parameters">{`R = ${selectedCloud?.r} գիգաբայթ`}</div>
              <div className="parameters">{`V = ${selectedCloud?.v} գիգաբայթ`}</div>
              <div className="parameters">{`A = ${selectedCloud?.a} հատ`}</div>
              <div className="parameters">{`S = ${selectedCloud?.s}`}</div>
              <div className="parameters">{`N = ${selectedCloud?.n}`}</div>
            </div>
          ) : null}
        </div> */}
      </div> 
      <div className="resultWrapper">
          <button className="button" onClick={calculate}>Հաստատել</button>
          {result && (
            <div className="result">{result}</div>
          )}
      </div>
    </div>
  );
}

export default App;
