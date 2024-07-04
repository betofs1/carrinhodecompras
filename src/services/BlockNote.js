function App() {
    const [content, setContent] = React.useState('<p>Escreva seu conteúdo aqui...</p>');
  
    return (
      <div className="App">
        <h1>Editor de Texto com BlockNote</h1>
        <BlockNoteProvider>
          <BlockNoteEditor
            content={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </BlockNoteProvider>
      </div>
    );
  }
  
  export default App;
  