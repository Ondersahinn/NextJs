import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../LandingPage/Footer';
import Header from '../Menu';

function EditorialGuidelines() {

    return (
        <>
        <Header />
        <Container fluid className='editorial-guidelines-full-part'>
            <Row className='editorial-guidelines-row'>
                <Col xs={12} md={12} className='editorial-guidelines-div'>
                    <h1>Editorial Guidelines</h1>
                    <p>
                        Thank you for your interest in sharing your legal updates, analysis, insights, and news with Turkish Law Blog. If you have a substantive question or would like to submit a proposal for a blog post, please contact our editors.
                </p>
                    <p>In submitting proposals, please take note of the following:</p>
                    <ul>
                        <li>We welcome blog posts that address current issues in Turkish Law and international law related to the area of expertise of our contributors. We particularly welcome editorial commentary and candid views. We discourage posts that merely summarise cases; while many of our entries focus on specific cases, we prefer that these posts include critical analysis or explore particular themes of wider resonance. We are particularly keen to create a “dialogue” between posts so please do cross-refer to and comment on other posts.</li>
                        <li>Please include a short title (Please Capitalize Posts As You See Here). A title that asks a question can generate more interest.</li>
                        <li>Blog posts must be between 1500 to 5000 words.</li>
                        <li>Please insert spaces between paragraphs.</li>
                        <li>Please include, where appropriate, hyperlinks to outside references or primary sources in the body of your text.</li>
                        <li>Avoid using ALL CAPS in the title or the text.</li>
                        <li>Your content must be original. If in your post, you refer to the work of another author, you must acknowledge that author as the source of such work.</li>
                        <li>The Turkish Law Blog values the originality of pieces above anything. Contributors must make known to Turkish Law Blog any submissions of the draft post with other publishers, at any time during the review process. Turkish Law Blog reserves the right to cease collaboration with respective contributors if they fail to do so.</li>
                        <li>If any internal authorizations are required from the employer, for example, to publish the post, the authors must confirm that they have obtained any and all such authorizations. This guideline is not to be construed as contrary to any other guideline or policy of the Turkish Law Blog, including the Blog’s requirement of originality and its general policy of publishing only previously unpublished content.</li>
                        <li>In keeping with the informal style of the blog, we ask that you do not use footnotes or endnotes. However, if you determine that footnotes would be appropriate, please follow the applicable academic instructions. (The numbering of footnotes is automatic, so no need to do so in the text of the footnote.)</li>
                    </ul>
                    <h4>Our Article Deletion/Modification Policy:</h4>
                    <ul>
                        <li>Please be ensure that we do not delete published articles unless we get your prior permission.</li>
                        <li>Please note that we do not make changes to contributor’s articles unless factual errors are found within them. If there is a factual error, we will update the body of the article and highlight the initial error in an editorial note.</li>
                    </ul>
                    <p>If you have any questions related to these policies, please feel free to reach out editors at:<a href='mail:editor@turkishlawblog.com'> editor@turkishlawblog.com </a></p>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}

export default EditorialGuidelines;
