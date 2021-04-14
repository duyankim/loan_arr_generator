<<<<<<< HEAD:src/exchange/Menu.java
package exchange;
=======
package exchange0330;
>>>>>>> c4e880bd243a2b2fbe8ef364343901befe03aefc:src/exchange0330/Menu.java

import java.io.IOException;
import java.util.Scanner;

public class Menu {
	ExchangeOutput runClass = new ExchangeOutput();
	
	Scanner sc = null;
	int menu;
	int inputKRW;
	
	public Menu() {
		sc = new Scanner(System.in);
	}
	
	public int inputMoney() throws IOException {
		int inputKRW;
		System.out.print("요청금액: ");
		inputKRW = sc.nextInt();
		
		if (inputKRW > 0) {
			FileOutput.writeDate();
			FileOutput.writeTime();
		}
		
		FileOutput.FileWrite(String.valueOf(inputKRW) + ",");
		return inputKRW;
	}
	
	public int inputMenu() {
		int inputMenuType;
		System.out.println("환전할 단위 : 1)USD 2)EUR 3)JPY");
		inputMenuType = sc.nextInt();
		return inputMenuType;
	}
	
	public void getMenu() throws IOException {
		inputKRW = inputMoney();
		menu = inputMenu();
		
		switch(menu) {
			case ConstValueClass.CHANGE_TYPE_USD:
				FileOutput.FileWrite(ConstValueClass.USD + ",");
				runClass.exchangeToUSD(inputKRW);
				break;
			case ConstValueClass.CHANGE_TYPE_EUR:
				FileOutput.FileWrite(ConstValueClass.EUR + ",");
				runClass.exchangeToEUR(inputKRW);
				break;
			case ConstValueClass.CHANGE_TYPE_JPY:
				FileOutput.FileWrite(ConstValueClass.JPY + ",");
				runClass.exchangeToJPY(inputKRW);
				break;
			default:
				break;
		}
	}
}
