// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function decimals() external view returns (uint8);
}

contract SubscriptionContract {
    enum Plan { None, Monthly, Annual }

    struct SubscriberInfo {
        address subscriber;
        Plan plan;
        uint256 amountPaid;
        uint256 paidAt;
        uint256 expiresAt;
    }

    mapping(address => SubscriberInfo) public subscribers;

    // MXNB token address
    address public constant MXNB_TOKEN = 0x82B9e52b26A2954E113F94Ff26647754d5a4247D;

    // Prices in MXNB (assuming 18 decimals)
    uint256 public constant MONTHLY_PRICE = 10000 * 10**14; // 0.00001 MXNB
    uint256 public constant ANNUAL_PRICE = 100000 * 10**14; // 0.0001 MXNB
    uint256 public constant MONTH = 30 days;
    uint256 public constant YEAR = 365 days;

    event Subscribed(address indexed subscriber, Plan plan, uint256 amount, uint256 paidAt, uint256 expiresAt);

    function subscribe(Plan planType) external {
        require(planType == Plan.Monthly || planType == Plan.Annual, "Invalid plan");
        uint256 price = planType == Plan.Monthly ? MONTHLY_PRICE : ANNUAL_PRICE;
        uint256 duration = planType == Plan.Monthly ? MONTH : YEAR;

        // Transfer MXNB tokens from user to this contract
        require(
            IERC20(MXNB_TOKEN).transferFrom(msg.sender, address(this), price),
            "Token transfer failed"
        );

        uint256 start = block.timestamp;
        uint256 expires = start + duration;

        subscribers[msg.sender] = SubscriberInfo({
            subscriber: msg.sender,
            plan: planType,
            amountPaid: price,
            paidAt: start,
            expiresAt: expires
        });

        emit Subscribed(msg.sender, planType, price, start, expires);
    }

    function getSubscriber(address user) external view returns (SubscriberInfo memory) {
        return subscribers[user];
    }

    // Optional: Withdraw function for contract owner
    address public owner = msg.sender;
    function withdrawTokens() external {
        require(msg.sender == owner, "Only owner");
        uint256 balance = IERC20(MXNB_TOKEN).balanceOf(address(this));
        require(IERC20(MXNB_TOKEN).transfer(owner, balance), "Withdraw failed");
    }
}
