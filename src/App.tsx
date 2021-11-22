import Layout from 'components/layout';
import Base64CssGen from 'components/base64cssgen';
import { FaGithub } from 'react-icons/fa';

const App = () => {
  return (
    <Layout>
      <h1 className="text-lg font-bold pb-2 border-b-2 border-gray-400 border-dashed mb-4 flex justify-between">
        Base64 background-imageジェネレーター
        <a
          href="https://github.com/morimorig3/base64css"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="1.5em" />
        </a>
      </h1>
      <Base64CssGen />
    </Layout>
  );
};

export default App;
