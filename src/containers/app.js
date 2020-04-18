import { Component } from 'react'
import Pagination from '../components/pagination'
import user from '../images/user.png'
import UserW from '../images/user.svg'
import home from '../images/home.svg'
localStorage.setItem('mock_database','{"ordersDB":{"userList":[{"openid":"null","create_dt":1576746215,"packeage_count":0,"user_id":60118,"lastlogin_ip":"127.0.0.1","passwd":"371466","is_delete":"0","user_type":"000","phone":"15802154663","logname":"陆峰","is_bind":0,"lastlogin_dt":1586994249},{"openid":"","create_dt":1576562639,"packeage_count":0,"user_id":60117,"lastlogin_ip":"127.0.0.1","passwd":"677939","is_delete":"1","user_type":"000","phone":"15802154663","logname":"陆峰 ","is_bind":0,"lastlogin_dt":1576562639}],"orderList":[{"status":"011","addr":{"create_dt":1576817137,"user_id":60118,"district":"上海市 上海市 崇明区","is_delete":"0","detail":"区政府","post_name":"区政府","phone":"1","addr_id":68},"create_dt":1587004388,"total_price":7096.2,"user_id":60118,"get_dt":0,"track_info":{},"is_delete":"0","order_id":610051124011,"notice":"2020/04/16|","phone":"15802154663","seller_user_id":60103,"addr_id":68,"post_id":"","reject_note":"","logname":"陆峰"},{"status":"011","addr":{"create_dt":1576817137,"user_id":60118,"district":"上海市 上海市 崇明区","is_delete":"0","detail":"区政府","post_name":"区政府","phone":"1","addr_id":68},"create_dt":1587004388,"total_price":1096.2,"user_id":60118,"get_dt":0,"track_info":{},"is_delete":"0","order_id":610051124012,"notice":"2020/04/16|","phone":"15802154663","seller_user_id":60103,"addr_id":68,"post_id":"","reject_note":"","logname":"陆峰"},{"status":"011","addr":{"create_dt":1576817137,"user_id":60118,"district":"上海市 上海市 崇明区","is_delete":"0","detail":"区政府","post_name":"区政府","phone":"1","addr_id":68},"create_dt":1587004388,"total_price":96.2,"user_id":60118,"get_dt":0,"track_info":{},"is_delete":"0","order_id":610051124032,"notice":"2020/04/16|","phone":"15802154663","seller_user_id":60103,"addr_id":68,"post_id":"","reject_note":"","logname":"陆峰"},{"status":"011","addr":{"create_dt":1576817137,"user_id":60118,"district":"上海市 上海市 崇明区","is_delete":"0","detail":"区政府","post_name":"区政府","phone":"1","addr_id":68},"create_dt":1587004388,"total_price":96.2,"user_id":60118,"get_dt":0,"track_info":{},"is_delete":"0","order_id":610051124034,"notice":"2020/04/16|","phone":"15802154663","seller_user_id":60103,"addr_id":68,"post_id":"","reject_note":"","logname":"陆峰"},{"status":"011","addr":{"create_dt":1576817137,"user_id":60118,"district":"上海市 上海市 崇明区","is_delete":"0","detail":"区政府","post_name":"区政府","phone":"1","addr_id":68},"create_dt":1587004388,"total_price":96.2,"user_id":60118,"get_dt":0,"track_info":{},"is_delete":"0","order_id":610051124031,"notice":"2020/04/16|","phone":"15802154663","seller_user_id":60103,"addr_id":68,"post_id":"","reject_note":"","logname":"陆峰"}]}}')
function LeftBox() {
    return (
        <div
            className="left-box"
            style={
                {
                    height: window.innerHeight
                }
            }
        >
            <ul className="menu-list">
                <li><img src={home} />欢迎页</li>
                <li className="active"><img src={UserW} />管理面板</li>
                <li>用户列表</li>
                <li>类目列表</li>
                <li>商品列表</li>
                <li>订单列表</li>
                <li>菜品销量统计</li>
                <li>用户购买统计</li>
            </ul>
        </div>
    );
}
class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (current) {
        this.setState({
            current
        })
    }
    render () {
        const { current } = this.state;
        let { list } = this.props || {};
        list = Array.isArray(list) ? list : []
        list = [
            ...list,
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            },
            {
                order_id: +new Date(),
                total_price: (+new Date() / 10000000).toFixed(2)
            }
        ]
        const size = 4; // 表格每页多少条
        const maxPage = Math.ceil(list.length / size) // 最大页码
        const size_page = 5 // 分页器每次多少个页码
        let current_page = Math.floor(current / size_page) // 分页器的当前页
        if (current % size_page === 0) { // 处理5 10 15这样的特殊数据
            current_page = current_page - 1
        }
        const start = (current_page) * size_page + 1;
        let end = (current_page + 1) * size_page;
        end = Math.min(end, maxPage) // end的最大值就是maxPage
        const listShow = list.slice((current - 1) * size, current * size)
        return (
            <div>
                <div className="content-bar-title">订单列表</div>
                <div className="content-bar-A"></div>
                <div className="content-bar-list">
                    <table>
                        <thead>
                            <tr>
                                <th>订单ID</th>
                                <th>金额(元)</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listShow.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.order_id}</td>
                                        <td>￥{item.total_price}</td>
                                        <td>
                                            <a>详情</a>
                                            <a className="ml8">删除</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    总条数：{list.length}
                    <br />
                    最大页码：{maxPage}
                    <br />
                    <br />
                    <Pagination
                        start={start}
                        end={end}
                        current={current}
                        max={maxPage}
                        handleClick={this.handleClick}
                    />
                </div>
            </div>
        );
    }
}
const RightBox= ({content}) => (
    <div className="right-box">
        <div className="right-bar">
            <div className="top-bar">
                <img src={user} />
                <div className="top-bar-textA">管理面板 >><a> 订单列表管理</a></div>
                <div className="top-bar-textB">17854265977 <a>退出</a></div>
            </div>
            <div className="time-bar">
                开始时间：<input type="date" />
                结束时间：<input type="date" />
                <button>查询</button>
            </div>
            <div className="content-bar">
                {content}
            </div>
        </div>
    </div>
)
class Index extends Component {
    constructor(props){
        super(props)
        let json = localStorage.getItem('mock_database')
        json = json || '{}'
        json = JSON.parse(json)
        const {orderList} = json.ordersDB
        this.state={
            orderList
        }
    }
    render(){
        const {orderList} = this.state
        return (
            <div>
               <LeftBox />
               <RightBox
                    content={(
                        <Orders
                            list={orderList}
                        />
                    )}
               />
            </div>
        )
    }
}
export default Index