/**
 *根据打折类型,返回该种类的折后总价
 *@sum
 */
export const discountType = {
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
		discountName:"满1000减10",
		afterDiscount:function(sum,price,num){
			if(sum>=1000){
				return sum -10;
			}else{
				return sum;
			}
		},
	},
	"004":{
		discountName:"满2000减30,满1000减10",
		afterDiscount:function(sum,price,num){
			if(sum>=2000){
				return sum -30;
			}else if(sum>=1000){
				return sum -10;
			}else{
				return sum;
			}
		},
	},
	"005":{
		discountName:"满3000减350,满2000减30,满1000减10",
		afterDiscount:function(sum,price,num){
			if(sum>=3000){
				return sum -350;
			}else if(sum>=2000){
				return sum -30;
			}else if(sum>=1000){
				return sum -10;
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