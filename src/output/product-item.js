export default class ProductItem{
	
	/**
	 * 商品对象
	 * @productName
	 * @productNO
	 * @productUnits
	 * @productPrice
	 * @discountNO
	 */
	
	constructor({productName,productNO,productUnits,discountNO}){
		this.productName = productName;
		this.productNO = productNO;
		this.productUnits = productUnits;
		this.productPrice = productPrice;
		this.discountNO = discountNO;
	}
	
	
}