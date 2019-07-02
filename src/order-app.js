import OrderRepresentation from './output/order-representation';
import DiscountItem from './output/discount-item';
import OrderItem from './output/order-item';

/**
 * customJson:现有会员
 * @
 */
var customJson = {
	"6236609999":{
		memberName:"马丁",
		memberNo:"6236609999",
		oldMemberType:"普卡",
		memberPoints:9860,
	},
	"6630009999":{
		memberName:"王立",
		memberNo:"6630009999",
		oldMemberType:"金卡",
		memberPoints:48860,
	},
	"6630009999":{
		memberName:"王立",
		memberNo:"6630009999",
		oldMemberType:"金卡",
		oldemberPoints:48860,
	},
}

/**
 *根据打折类型,返回该种类的折后总价
 *@sum
 */
var discountType = {
	"001":{
		discountName:"可使用95折打折券",
		afterDiscount:function(sum,price,num){
			return sum * 0.95;
		},
	},
	"002":{
		discountName:"可使用9折打折券",
		afterDiscount:function(sum,price,num){
			return sum * 0.9;
		},
	},
	"003":{
		discountName:"每满1000减10",
		afterDiscount:function(sum,price,num){
			var remainder = null;
			if(sum>=1000){
				remainder = parsent(sum/1000);
				return sum - remainder*10;
			}else{
				return sum;
			}
		},
	},
	"004":{
		discountName:"每满2000减30,每满1000减10",
		afterDiscount:function(sum,price,num){
			var remainder = null;
			if(sum>=2000){
				remainder = parsent(sum/2000);
				return sum - remainder*30;
			}else if(sum>=1000){
				remainder = parsent(sum/1000);
				return sum - remainder*10;
			}else{
				return sum;
			}
		},
	},
	"005":{
		discountName:"每满3000减350,每满2000减30,每满1000减10",
		afterDiscount:function(sum,price,num){
			var remainder = null;
			if(sum>=3000){
				remainder = parsent(sum/3000);
				return sum - remainder*350;
			}else if(sum>=2000){
				remainder = parsent(sum/2000);
				return sum - remainder*30;
			}else if(sum>=1000){
				remainder = parsent(sum/1000);
				return sum - remainder*10;
			}else{
				return sum;
			}
		},
	},
	"006":{
		discountName:"第3件半价",
		afterDiscount:function(sum,price,num){
			if(num>=3){
				return sum - price/2;
			}else{
				return sum;
			}
		},
	},
	"007":{
		discountName:"满3送1",
		afterDiscount:function(sum,price,num){
			if(num>=4){
				return sum - price;
			}else{
				return sum;
			}
		},
	},
	"008":{
		discountName:"第3件半价，满3送1",
		afterDiscount:function(sum,price,num){
			if(num>=4){
				return sum - price;
			}else if(num>=3){
				return sum - price/2;
			}else{
				return sum;
			}
		},
	},
}

/**
 * 贵金属产品信息
 * @productName:产品名
 * @productNO:产品编号
 * @productUnits:产品单位名
 * @productPrice:产品单价
 * @discountTypeArr:产品结构类型数组
 */

var productOder = {
	"001001":{
		productName:"世园会五十国钱币册",
		productNO:"001001",
		productUnits:"册",
		productPrice:998,
	},
	"001002":{
		productName:"2019北京世园会纪念银章大全40g",
		productNO:"001002",
		productUnits:"盒",
		productPrice:1380,
		discountTypeArr:["002"],
	},
	"003001":{
		productName:"招财进宝",
		productNO:"003001",
		productUnits:"条",
		productPrice:1580,
		discountTypeArr:["001"],
	},
	"003002":{
		productName:"水晶之恋",
		productNO:"003002",
		productUnits:"条",
		productPrice:980,
		discountTypeArr:["008"],
	},
	"002002":{
		productName:"中国经典钱币套装",
		productNO:"002002",
		productUnits:"套",
		productPrice:998,
		discountTypeArr:["004"],
	},
	"002001":{
		productName:"守扩之羽比翼双飞4.8g",
		productNO:"002001",
		productUnits:"条",
		productPrice:1080,
		discountTypeArr:["008","001"],
	},
	"002003":{
		productName:"中国银象棋12g",
		productNO:"002003",
		productUnits:"套",
		productPrice:698,
		discountTypeArr:["005","002"],
	},
}

export default class OrderApp {

  checkout(orderCommand) {
    // TODO: 请完成需求指定的功能
	var orderProduct = orderCommand["items"];//订单产品数组
	var allSum = null;
	for(var index in orderCommand["items"]){
		
	}
	
    return (new OrderRepresentation({
		orderId:orderCommand["orderId"],			//orderId 订单号
		createTime:orderCommand["createTime"],			//createTime 订单创建时间
		memberNo:customJson["memberNo"],			//memberNo 会员编号
		memberName:customJson["memberName"],			//memberName 会员姓名
		oldMemberType:customJson["oldMemberType"],			//oldMemberType 原会员等级
		newMemberType:newMemberType,			//newMemberType
		memberPointsIncreased:memberPointsIncreased,			//memberPointsIncreased
		memberPoints:memberPoints,			//memberPoints
		orderItems:orderItems,			//orderItems
		totalPrice:totalPrice,			//totalPrice
		discounts:discounts,			//discounts
		totalDiscountPrice:totalDiscountPrice,			//totalDiscountPrice
		receivables:receivables,			//receivables
		payments:orderCommand["payments"],			//payments
		discountCards:orderCommand["discountCards"],		//discountCards
		
	})).toString();
  }
}
/**
   * @param orderId            订单号--
   * @param createTime         订单创建时间--
   * @param memberNo           会员编号
   * @param memberName         会员姓名
   * @param oldMemberType      原会员等级
   * @param newMemberType      新会员等级。当新老等级不一致时，视为升级
   * @param memberPointsIncreased    本次消费会员新增的积分
   * @param memberPoints       会员最新的积分( = 老积分 + memberPointsIncreased)
   * @param orderItems         订单明细
   * @param totalPrice         订单总金额
   * @param discounts          优惠明细
   * @param totalDiscountPrice 优惠总金额
   * @param receivables        应收金额
   * @param payments           付款记录--
   * @param discountCards      付款使用的打折券--
   */
//   constructor({orderId, createTime,
//     memberNo, memberName, oldMemberType, newMemberType, memberPointsIncreased, memberPoints,
//     orderItems, totalPrice, discounts, totalDiscountPrice, receivables, payments, discountCards})
var orderCommand = {
  "orderId": "0000001",//--
  "memberId": "6236609999",
  "createTime": "2019-07-02 15:00:00",//--
  "items": [
    {
      "product": "001001",
      "amount": 2
    },
    {
      "product": "001002",
      "amount": 3
    },
    {
      "product": "002002",
      "amount": 1
    },
    {
      "product": "002003",
      "amount": 5
    }
  ],
  "payments": [
    {
      "type": "余额支付",
      "amount": 9860.00
    }
  ],
  "discountCards": [
    "9折券"
  ]
}