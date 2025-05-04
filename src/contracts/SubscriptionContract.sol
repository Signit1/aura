// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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

    uint256 public constant MONTHLY_PRICE = 0.00001 ether;
    uint256 public constant ANNUAL_PRICE = 0.0001 ether;
    uint256 public constant MONTH = 30 days;
    uint256 public constant YEAR = 365 days;

    event Subscribed(address indexed subscriber, Plan plan, uint256 amount, uint256 paidAt, uint256 expiresAt);

    function subscribe(Plan planType) external payable {
        require(planType == Plan.Monthly || planType == Plan.Annual, "Invalid plan");
        uint256 price = planType == Plan.Monthly ? MONTHLY_PRICE : ANNUAL_PRICE;
        uint256 duration = planType == Plan.Monthly ? MONTH : YEAR;
        require(msg.value == price, "Incorrect ETH amount sent");

        uint256 start = block.timestamp;
        uint256 expires = start + duration;

        subscribers[msg.sender] = SubscriberInfo({
            subscriber: msg.sender,
            plan: planType,
            amountPaid: msg.value,
            paidAt: start,
            expiresAt: expires
        });

        emit Subscribed(msg.sender, planType, msg.value, start, expires);
    }

    function getSubscriber(address user) external view returns (SubscriberInfo memory) {
        return subscribers[user];
    }

    // Optional: Withdraw function for contract owner
    address public owner = msg.sender;
    function withdraw() external {
        require(msg.sender == owner, "Only owner");
        payable(owner).transfer(address(this).balance);
    }
}
