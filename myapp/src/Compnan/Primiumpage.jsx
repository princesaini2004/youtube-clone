import React from 'react'
import {
  Link
} from "react-router-dom";
function Primiumpage() {
  return (
    <div>
      <div className="premiumpage">
        <Link to='/'><i class="fa-solid fa-arrow-left fa-2xl"></i></Link>
        <div className="premiumpage1">
          <h3>Choose Your Plan</h3>
          <div className="preimg">
            <img id='preimg' src={require('./preimg.png')} alt="" /> <br />
            <span>Individual Membership</span>
            <h3>Pre-paid plans  <br />
              <span>Pay up front. Top up anytime. We accept many forms of payment, including UPI.</span>
            </h3>

          </div>
          <div className="prebox">
            <h3>12-month <mark>Best value</mark>  <br /> <span>₹1,290.00</span></h3>
          </div>
          <div className="prebox">
            <h3>3-month <br /> <span>₹399.00</span></h3>
          </div>
          <div className="prebox">
            <h3>1-month <br /> <span>₹139.00</span></h3>
          </div>
          <h3>Subscription plan<br /><span>Automatic payments such as credit cards are required. Billing recurs monthly. Cancel anytime.</span></h3>
          <div className="prebox">
            <h3>Monthly subscription <br /><span>1 Month free</span>  <br /><span>₹129/Month After trail</span></h3>
          </div>
          <p>Restrictions apply to certain features and vary by device, geographical location of the user, and others. Learn more
            Only first-time YouTube Red, YouTube Premium, YouTube Music Premium and Google Play Music subscribers are eligible for trials, introductory offers or promotional pricing. Except for Google Workspace Individual edition accounts, Google Workspace accounts are not eligible for trials unless they are signing up for Student subscriptions. Users can only sign up for one trial per payment method. Learn more here.
            You’ll be automatically charged the price listed unless you cancel during your trial, and then every month starting on the first billing date until you cancel your subscription. Cancel anytime. No refunds or credits for partial billing periods. Refund policy
            Family subscription: Invite up to 5 additional family members to join your Google family group and share your YouTube Music Premium and YouTube Premium subscription. All family members must be age 13 or older, have a Google Account, and reside in the same household as the family manager. Family subscriptions are available in select countries. Learn more
            Student subscription: Sign up for either a YouTube Music Premium or YouTube Premium membership as a student and get all the same benefits at a discounted rate. YouTube student memberships are only available to full-time students at higher education institutions in select countries, and eligibility will be verified by a third-party verification service. Learn more
            Pre-paid plans: You can make a single-time purchase of a YouTube Premium or YouTube Music Premium individual membership for a fixed time period on a non-recurring basis using the pre-paid plans. Once the time period you purchased ends, the pre-paid plan will automatically terminate and you will lose access to your benefits. To maintain access to your benefits, you will need to make another purchase with options provided by your billing platform or switch to a different plan. You may have up to 24 months of pre-paid access.</p>

        </div>

        
      </div>
    </div>
  )
}

export default Primiumpage

