import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import Loader from 'react-loader-spinner';

import ReportPrintable from './report-printable.component';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import candidateService from '../../services/candidateService';

import { ReactComponent as IconFile } from './icons/file.svg';
import { ReactComponent as IconPrint } from './icons/print.svg';

import './style.scss';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingReport: false,
      categoryId: 1,
      candidateScoreByCategory: []
    };
  }
  generateReport = async () => {
    const { categoryId } = this.state;
    this.setState({ isLoadingReport: true });
    try {
      const { data } = await candidateService.getCandidateAverageByCategory(
        categoryId
      );
      this.setState({ candidateScoreByCategory: data });
    } catch (error) {
      this.setState({ candidateScoreByCategory: [] });
    } finally {
      this.setState({ isLoadingReport: false });
    }
  };
  handleCategoryChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };
  render() {
    const { isLoadingReport, candidateScoreByCategory } = this.state;
    const { categories: defaultCategories } = this.props;
    const customReports = [
      {
        id: -1,
        name: 'Top 3'
      }
    ];
    const categories = [...defaultCategories, ...customReports];

    const displayReport = !!(
      candidateScoreByCategory && candidateScoreByCategory.length
    );
    return (
      <div className="container">
        <div className="printable-filters">
          <div className="filters-selector">
            <label className="form-label">Category</label>
            <Form.Control
              name="categoryId"
              as="select"
              className="textbox"
              onChange={this.handleCategoryChange}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Control>
            <Button
              className="print-preview"
              variant="success"
              disabled={isLoadingReport}
              onClick={this.generateReport}
            >
              Generate Report
            </Button>
          </div>
        </div>
        <div className="printable-container">
          {isLoadingReport && (
            <div className="empty-report">
              <Loader
                type="Oval"
                color="#5D120F"
                height={80}
                width={80}
                visible={isLoadingReport}
              />
            </div>
          )}
          {!isLoadingReport && !displayReport && (
            <div className="empty-report">
              <div className="empty-body">
                <IconFile className="icon-file"></IconFile>
                <h2 className="empty-message">No Report Available</h2>
              </div>
            </div>
          )}
          {!isLoadingReport && displayReport && (
            <div>
              <div className="print-report-container">
                <ReactToPrint
                  trigger={() => (
                    <Button className="print-report" variant="primary">
                      <IconPrint />
                      Print Preview
                    </Button>
                  )}
                  content={() => this.componentRef}
                />
              </div>

              <ReportPrintable
                candidates={candidateScoreByCategory}
                ref={el => (this.componentRef = el)}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Report;
