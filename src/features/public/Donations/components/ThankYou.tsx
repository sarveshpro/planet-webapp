import React, { ReactElement } from 'react';
import Close from '../../../../assets/images/icons/headerIcons/close';
import PlanetLogo from '../../../../assets/images/PlanetLogo';
import styles from './../styles/ThankYou.module.scss';

interface Props {
    project: Object;
    treeCount: number;
    treeCost: number;
    currency: String;
    setDonationStep: Function;
    contactDetails: Object;
    isGift: Boolean;
    giftDetails: Object;
    onClose: any;
    paymentType: String;
}

function ThankYou({ project,
    treeCount,
    treeCost,
    currency,
    contactDetails,
    isGift,
    giftDetails, onClose, paymentType }: Props): ReactElement {

    let paymentTypeUsed;
    switch (paymentType) {
        case 'CARD': paymentTypeUsed = 'Credit Card'; break;
        case 'SEPA': paymentTypeUsed = 'SEPA DBIT CARD'; break;
        case 'GOOGLE_PAY': paymentTypeUsed = 'Google Pay'; break;
        case 'APPLE_PAY': paymentTypeUsed = 'Apple Pay'; break;
        case 'Browser': paymentTypeUsed = 'Browser'; break;
        default: paymentTypeUsed = 'Credit Card';
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div onClick={onClose} className={styles.headerCloseIcon}>
                    <Close />
                </div>
                <div className={styles.headerTitle}>Thank You!</div>
            </div>


            <div className={styles.contributionAmount}>
                Your Donation of {currency} {Number(treeCount * treeCost).toFixed(2)} was paid with {paymentTypeUsed}
            </div>

            <div className={styles.contributionMessage}>
                {isGift && `We've sent an email to ${giftDetails.firstName} ${giftDetails.lastName} about the gift.`} Your {treeCount} trees will be planted by {project.name}.
            </div>



            <div className={styles.horizontalLine} />

            <div className={styles.thankyouImageContainer}>
                <div className={styles.thankyouImage}>
                    <div className={styles.pfpLogo}>
                        <PlanetLogo />
                    </div>
                    <div className={styles.donationCount}>
                        I just donated <br /> {treeCount} trees.
                    </div>
                </div>
            </div>


            {/* <div className={styles.buttonsContainer}>
                <div className={styles.downloadButton}>
                    <Download />
                </div>
                <div style={{ width: '20px' }}></div>
                <div className={styles.downloadButton}>
                    <Share color={'#87b738'} />
                </div>

            </div> */}
        </div>
    )
}

export default ThankYou
