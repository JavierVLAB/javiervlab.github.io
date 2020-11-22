import React from 'react';

var cv_json = require('../components/myCV.json');

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  create_CV_render = () => {
    const my_cv_data = cv_json;

    let col = []
    let i = 0;
    for (var cv_section in my_cv_data) {
      let table = []
      let section = []
      section.push(<h3 key="cv_section" className="cv_section">{cv_section}</h3>)
      let row = []
      let item = []
      table.push(<div className="col-md-4">{section}</div>)
      let j=0;
      for (var cv_item in my_cv_data[cv_section]) {
         item = []
         let k = 0;
        for (var cv_col in my_cv_data[cv_section][cv_item]){ 
          let text = my_cv_data[cv_section][cv_item][cv_col]
          let cell = "cell_" + i.toString() + "_" + j.toString()+ "_" + k.toString();
          if (text !== 'empty' && cv_col !== 'certificate' && cv_col !== 'tags') 
            item.push(<p key={cell} className={cv_col}>{text}</p>)
            k++;
        }
        row.push(<div className="item_row">{item}</div>);
        j++;
      }
      i++;
      table.push(<div className="col-md-8 col-cv">{row}</div>);
      table.push(<br></br>);
      table.push(<div className="col-md-12 cv_divider_outer">
          <div className="cv_divider"></div>
      </div>)
      col.push(<div className="row">{table}</div>)
      

      
    }

    return col
  }
  

  componentDidMount() {
    //this.fetchCV();
  }

  render() {
    
    return(
      
      <section id="services">

        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="section-heading">Resume</h1>
          </div>
        </div>

        <div className="container cv_div">
            {this.create_CV_render()}
        </div>
      </section>
    );
  }
}

export default Resume;
