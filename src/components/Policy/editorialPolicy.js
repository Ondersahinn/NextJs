import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../LandingPage/Footer';
import Header from '../Menu';

function EditorialPolicy() {

    return (
        <>
            <Header />
            <Container fluid className='editorial-guidelines-full-part editorial-policy'>
                <Row className='editorial-guidelines-row'>
                    <Col xs={12} md={12} className='editorial-guidelines-div'>
                        <h1>Editorial Policy</h1>
                        <p>
                            It is a violation of our editorial policy to (1) publish any material that is copyrighted, protected by trade secret or otherwise subject to third party proprietary rights, including privacy and publicity rights, unless you are the owner of such rights or have permission from the rightful owner; (2) publish falsehoods or misrepresentations that could damage the publisher or any third party; or (3) submit material that is unlawful, obscene, defamatory, libellous, threatening, pornographic, harassing, hateful, racially or ethically offensive, otherwise disruptive to civil debate on the blog, or encourages conduct that would be considered as a criminal offence, give rise to civil liability, or violate any law.

                         </p>
                        <p>Furthermore, the Contributor and Editor(s) of the Turkish Law Blog “TLB” may at their discretion remove submitted comments and/or other material from the TLB if they have a reason to believe that the materials are in violation of the Editorial Policy.
                        If any internal authorisations are required from the employer, for example, to publish the post, the authors must confirm that they have obtained any and all such authorizations. This guideline is not to be construed as contrary to any other guideline or policy of the TLB, including the TLB’s requirement of originality and its general policy of publishing only previously unpublished content.
                        </p>
                        <p>Please note that the TLB does not republish materials previously published, whether in their original version, amended, or translated, on other websites or journals / books.</p>
                        <p>The TLB values originality of pieces above anything. Contributors must make known to TLB any submissions of the draft post with other publishers, at any time during the review process. The TLB reserves the right to cease collaboration with respective contributors, if they fail to do so.</p>
                        <p>Turkish Law Blog posts can be included by contributors on their (employer’s) own websites, provided they give credit to and link back to the original post on the Turkish Law Blog. Third parties are not allowed to include Turkish Law Blog posts without prior approval.</p>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default EditorialPolicy;
