import Layout from 'components/layout';
import Base64CssGen from 'components/base64cssgen';
const App = () => {
  return (
    <Layout>
      <h1 className="text-lg font-bold pb-2 border-b-2 border-gray-400 border-dashed mb-4">
        Base64 background-imageジェネレーター
      </h1>
      <Base64CssGen />
    </Layout>
  );
};

export default App;
