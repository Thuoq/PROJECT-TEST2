import React from 'react';
import './sort-product.styles.scss';
import { Col , Row, Menu, Tag } from 'antd';



const SortProduct = ({visible}) => (
    <div className="sort-container animate__slow animate__animated animate__fadeInUp" style={visible ? {display: 'block'} : {display:'none'}}>
        <Row gutter={[48, 24]} >
            <Col xs={24} md={12} lg={6} className="sort-items" >
                <Menu >
                    <Menu.Item > <h3 className="sort-container__title" >Sort By</h3></Menu.Item>
                    <Menu.Item  key="setting:1 1">
                         <span className="filter-link">Default</span> 
                    </Menu.Item>
                    <Menu.Item  key="setting:1 2">
                         <span className="filter-link">Popularity </span>
                    </Menu.Item>
                    <Menu.Item  key="setting:1 23" >
                         <span className="filter-link" >Newness </span>
                    </Menu.Item>
                    <Menu.Item  key="setting:1 24" >
                        <span className="filter-link" >Price: Low to hight </span>
                    </Menu.Item>
                    <Menu.Item key="setting:1 25" > 
                        <span className="filter-link" >Price: Hight to low</span> 
                    </Menu.Item>
                </Menu>
               
            </Col>
            <Col  xs={24} md={12} lg={6} className="sort-items"   >
                <Menu >
                    <Menu.Item ><h3 >Price</h3></Menu.Item>
                    <Menu.Item  key="setting:1 26">
                         <span className="filter-link">0$ - 2$</span> 
                    </Menu.Item>
                    <Menu.Item  key="setting:1 27"> 
                        <span className="filter-link">2$ - 5$ </span>
                    </Menu.Item>
                    <Menu.Item  key="setting:1 28"> 
                        <span className="filter-link">9$ - 10$ </span>
                    </Menu.Item>
                    <Menu.Item  key="setting:1 22"> 
                        <span className="filter-link">50$ - 100$ </span>
                    </Menu.Item>
                </Menu>
            </Col>
            <Col  xs={24} md={12} lg={6} className="sort-items"  >
                <Menu  >
                    <Menu.Item> <h3 >Color</h3> </Menu.Item>
                    <Menu.Item  key="setting:1 29"> 
                        <span  className="color-filter color-filter--black"></span> 
                        <span   className="filter-link">Black</span>
                    </Menu.Item>
                    <Menu.Item   key="setting:1 30"> 
                        <span   className="color-filter color-filter--blue"></span> 
                       <span  className="filter-link">Blue</span> 
                    </Menu.Item>
                    <Menu.Item    key="setting:1 31"> 
                        <span  className="color-filter color-filter--gray">
                        </span> 
                        <span className="filter-link">Gray</span>
                         
                        </Menu.Item>
                    <Menu.Item  key="setting:1 32"> 
                        <span  className="color-filter color-filter--green">
                        </span>
                         <span className="filter-link">Green</span> </Menu.Item>
                    <Menu.Item   key="setting:1 33"> 
                        <span  className="color-filter color-filter--white"></span>
                        <span className="filter-link">White</span> 
                    </Menu.Item>
                </Menu>
                 
            </Col>
            <Col  xs={24} md={12} lg={6}className="sort-items"  >
            <Menu >
                <Menu.Item> <h3 >Tags</h3> </Menu.Item>
            </Menu>
            <Tag color="blue">Blue</Tag>
            <Tag color="blue">Blue</Tag>
               
            
                
            </Col>
        </Row>
    </div>
)

export default SortProduct;