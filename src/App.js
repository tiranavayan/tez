import './App.css';
import react, { useState } from 'react';

const App = () => {

  const [result, setResult] = useState(null);

  const [processor, setProcessor] = useState('none');
  const [ram, setRam] = useState('none');
  const [hdd, setHdd] = useState('none');
  const [adaptorsCount, setAdaptorsCount] = useState('none');
  const [securityLevel, setSecurityLevel] = useState('none');
  const [projectType, setProjectType] = useState('none');

  const processorValues = [2, 4, 6, 8, 10, 12, 16];
  const ramValues = [8, 10, 12, 16, 32, 64];
  const hddValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000];
  const adaptorsCountValues = [1, 2, 3, 4, 5, 6];

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

  const calculate = () => {
    if (
      processor !== 'none'
      && ram !== 'none'
      && hdd !== 'none'
      && adaptorsCount !== 'none'
      && securityLevel !== 'none'
      && projectType !== 'none'
    ) {
      setResult(`${processor} ${ram} ${hdd} ${adaptorsCount} ${securityLevel} ${projectType}`);
    } else {
      setResult(`Ընտրեք բոլոր պարամետրերը`);
    }
  };

  return (
    <div className="App">
      <div className="title">Հիբրիդային ամպային համակարգում նախագծերի օպտիմալ բաշխումը Տիգրան Հոպար</div>
      <div className="Container">
        <div className="SelectWrapper">
          <span className="SlectLabel">Պրոցեսորների քանակ (P)</span>
          <select
            name="processor"
            className="Processor"
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
            name="processor"
            className="Processor"
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
            name="processor"
            className="Processor"
            value={hdd}
            defaultValue={'none'}
            onChange={(e) => setHdd(e.target.value)}
          >
            <option className="Options" value="none" disabled>none</option>
            {hddValues.map((value) => (
              <option className="Options" key={`${value} ${Math.random()}`} value={value}>
                {value} գիգաբայթ
              </option>
            ))}
          </select>
        </div>
        <div className="SelectWrapper">
          <span className="SlectLabel">Ցանցային ադապտորների քանակ (A)</span>
          <select
            name="processor"
            className="Processor"
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
            name="processor"
            className="Processor"
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
            name="processor"
            className="Processor"
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
        <button className="button" onClick={calculate}>Հաստատել</button>
        {result && (
          <div className="result">{result}</div>
        )}
      </div>
    </div>
  );
}

export default App;
