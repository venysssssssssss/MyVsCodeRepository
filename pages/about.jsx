import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Graduated in the technical teaching of Systems Development by SENAI - BA.</li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> Studying <b>Data Science</b> and <b>Machine Learning on</b> @ <a href='https://developers.google.com/machine-learning/crash-course?hl=pt-br'>Google</a>.</li>
        <li><span role="img" aria-label="light-bulb">💡</span> Open to collaborating on projects and innovative ideas. </li>
        <li><span role="img" aria-label="laptop">💻</span> Currently working on Development bots and Studying API'S. </li>
      </ul>
      <br/>
    </>
  );
};


export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
