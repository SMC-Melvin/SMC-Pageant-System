import React, { Component } from 'react';
import './category.scss';
import Header from './fixedNav/header';
import Footer from './fixedNav/footer';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import bell from '../../assets/images/svg/bell.svg';
import fb from '../../assets/images/svg/fb.svg';
import settings from '../../assets/images/svg/settings.svg';
import twitter from '../../assets/images/svg/twitter.svg';
import ig from '../../assets/images/svg/ig.svg';
import logout from '../../assets/images/svg/logout.svg';
import edit from '../../assets/images/svg/edit.svg';
import trash from '../../assets/images/svg/trash.svg';
// import philippines from '../../assets/images/svg/philippines.svg';
// import copyright from '../../assets/images/svg/copyright.svg';


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>

                <Header />

                    <div className="category-section">
                        <div className="container">
                            <table className="table table-hover margin-top-50">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Categories</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className="text=uppercase">Best in Production</td>
                                        <td width="10px" className="padding-edit"><img src={edit} alt="" width="15px" height="15px" className="cursor"/></td>
                                        <td width="10px" className="padding-edit"><img src={trash} alt="" width="15px" height="15px" className="cursor"/></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className="text-uppercase">First Round Interview</td>
                                        <td width="10px" className="padding-edit"><img src={edit} alt="" width="15px" height="15px" className="cursor"/></td>
                                        <td width="10px" className="padding-edit"><img src={trash} alt="" width="15px" height="15px" className="cursor"/></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td className="text-uppercase">Best in Talent</td>
                                        <td width="10px" className="padding-edit"><img src={edit} alt="" width="15px" height="15px" className="cursor"/></td>
                                        <td width="10px" className="padding-edit"><img src={trash} alt="" width="15px" height="15px" className="cursor"/></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className="text-uppercase">Best in Attire</td>
                                        <td width="10px" className="padding-edit"><img src={edit} alt="" width="15px" height="15px" className="cursor"/></td>
                                        <td width="10px" className="padding-edit"><img src={trash} alt="" width="15px" height="15px" className="cursor"/></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td className="text-uppercase">Top 3</td>
                                        <td width="10px" className="padding-edit"><img src={edit} alt="" width="15px" height="15px" className="cursor"/></td>
                                        <td width="10px" className="padding-edit"><img src={trash} alt="" width="15px" height="15px" className="cursor"/></td>
                                    </tr>
                                </tbody>
                            </table>

                            <button type="button" className="btn btn-add" data-toggle="modal" data-target="#myModal">Add Category</button>

                            <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                <div className="modal-content">
                                
                                    <div className="modal-header padding-150">
                                    <h4 className="modal-title">Category</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    
                                    <div className="modal-body padding-150">
                                        <input type="text" placeholder="Category" className="form-control textbox" />
                                    </div>
                                    
                                    <div className="modal-footer padding-150">
                                        <button className="btn btn-clear">Clear</button>
                                        <button type="button" className="btn btn-save">SAVE</button>    
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <Footer />

            </div>
         );
    }
}
 
export default Category;
