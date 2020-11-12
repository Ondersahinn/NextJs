import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../LandingPage/Footer';
import Header from '../Menu';

function UserAgreement() {

    return (
        <>
            <Header />
            <Container fluid className='editorial-guidelines-full-part'>
                <Row className='editorial-guidelines-row'>
                    <Col xs={12} md={12} className='editorial-guidelines-div userAgreement'>
                        <h1>User Agreement & Disclaimer</h1>
                        <p>Welcome to Turkish Law Blog (“TLB”, “Service” or “we”). By using this Service, you agree to be bound by all of the terms of this Agreement (“User Agreement”).</p>
                        <ul>
                            <li>The Service is currently free to all users, however, we reserve the right to charge for this Service in the future. In such event, we will notify you in advance, and give you an opportunity to subscribe to this Service. We reserve the right to change the terms of this Agreement or to modify any features of this Service at any time. By registering for this Service and/or continuing to use this Service after the posting of Notices regarding such changes, you agree to be bound by such changes.</li>
                            <li>This Service (including, but not limited to, text, photographs, graphics, video and audio content) is protected by copyright as a collective work or compilation under the copyright laws of Turkey and other countries. All individual articles, content and other elements comprising this Service are also copyrighted works. You must abide by all additional copyright notices or restrictions contained in this Service. By posting content on the Service, a user is giving TLB the right to display such content on the Service and its affiliated publications and to distribute such content and use such content for promotional and marketing purposes.</li>
                            <li>Except for content you have posted on the Service, or unless expressly permitted, you may not copy, reproduce, distribute, publish, enter into a database, display, perform, modify, create derivative works, transmit, or in any way exploit any part of this Service, except that you may download material from this Service for your own personal use as follows: you may make one machine readable copy and/or one print copy that is limited to occasional articles of personal interest only. Without limiting the generality of the foregoing, you may not distribute any part of this Service over any network, including a local area network, nor sell or offer it for sale. In addition, these files may not be used to construct any kind of database.</li>
                            <li>We are concerned about the integrity of our Service when it is viewed in a setting created by a third party that includes advertising or other materials that we have not authorized to be displayed with our Service. Without limiting the provisions of (3a), neither you nor any third party shall make use of the contents of the Service in any manner that constitutes an infringement of our rights, including copyright or that has not been authorized by us. In particular you are not allowed to use framing or other techniques which make it appear as if TLB is part of another website.</li>
                            <li>Just as TLB requires users to respect our copyrights, and those of our affiliates and partners, we respect the copyrights of others. If you believe in good faith that your copyrighted work has been reproduced on our site without authorization in a way that constitutes copyright infringement, you may notify our designated copyright agent by email to compliance@turkishlawblog.com. This contact information is specifically for suspected copyright infringement, but may be used as well for suspicions of other infringements on third party rights. Contact information for other matters is provided elsewhere on this site. Any personal information you provide in your email will be used only for purposes related to your email.</li>
                            <li>You will be responsible for all charges incurred while your account is being used, if any, including charges for any goods or services. You are also responsible for all statements made or materials posted under your account, including liability for harm caused by such statements or materials. You may not transfer, sell, or otherwise assign your rights or obligations under this Agreement.</li>
                            <li>You agree to indemnify and hold harmless TLB, and its divisions and affiliates, and their directors, officers, managers, employees, shareholders, agents, and licensors, from and against all losses, expenses, damages and costs, including reasonable attorneys’ fees, resulting from any violation of this Agreement, or the failure to fulfill any obligations relating to your account incurred by you or any other person using your account. We reserve the right to take over the exclusive defense of any claim for which we are entitled to indemnification under this Section. In such event, you shall provide us with such cooperation as is reasonably requested by us.</li>
                            <li>This Service is available “as is.” We do not warrant that this Service will be uninterrupted or error-free. There may be delays, omissions, interruptions and inaccuracies in the news, information or other materials available through this Service. We are not responsible for the availability or content of other services that may be linked to this Service. We do not make any warranties, express or implied, including without limitation, those of merchantability and fitness for a particular purpose, with respect to this Service or any information or goods that are available or advertised or sold through this Service. We do not make any representations, nor do we endorse the accuracy, completeness, timeliness or reliability of any advice, opinion, statement or other material or database displayed, uploaded or distributed in this Service or available though links in this Service. We reserve the right to correct any errors or omissions in this Service. Although we intend to take reasonable steps to prevent the introduction of viruses, worms, “Trojan horses” or other destructive materials to this Service, we do not guarantee or warrant that this Service or materials that may be downloaded from this Service do not contain such destructive features. We are not liable for any damages or harm attributable to such features. If you rely on this Service and any materials available through this Service, you do so solely at your own risk.</li>
                            <li>TLB and its divisions and affiliates, and their directors, officers, managers, employees, shareholders, agents and licensors are not liable for incidental, indirect, consequential, special, punitive, or exemplary damages of any kind, including lost revenues or profits, loss of business or loss of data, in any way related to this Service or for any claim, loss or injury based on errors, omissions, interruptions or other inaccuracies in this Service (including without limitation as a result of breach of any warranty or other term of this Agreement). Any claim against us shall be limited to the amount you paid, if any, for use of this Service.</li>
                            <li>This Agreement may be terminated by either party for any reason at any time. Sections (b) and (e) through (h) of this Agreement shall survive such termination.</li>
                            <li>This Agreement shall be governed by the laws of Turkey. All claims and disputes regarding TLB and/or consequences of the use of TLB shall be settled exclusively by the applicable court in Istanbul in Turkey.</li>
                        </ul>
                        <p>
                            By continuing to use TLB, you agree to abide by the terms of this agreement.</p>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default UserAgreement;