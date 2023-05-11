function SimpleInputContainer() {
  const [value, setValue] = useState({});

  const localInputRef = useRef(null);
  const externalInputRef = useRef(null);

  const handleLocalInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // Focus on the first input on load
  useEffect(() => {
    // localInputRef.current.focus();
    externalInputRef.current.focus();
  }, []);

  return (
    <div id="main-container">
      <label htmlFor="local-input-one">
        Local input
        {":   "}
        <input
          id="local-input-one"
          name="localInputOne"
          value={value.localInputOne}
          onChange={handleLocalInputChange}
          ref={localInputRef}
        />
      </label>
      <br /> <br />
      <label htmlFor="local-input-two">
        Local input
        {":   "}
        <input
          id="local-input-two"
          name="locaInputTwo"
          value={value.localInputTwo}
          onChange={handleLocalInputChange}
        />
      </label>
      <br /> <br />
      <label htmlFor="externalInput">
        External Input
        {"  "}
        <Input
          ref={externalInputRef}
          id="externalInput"
          name="externalInputOne"
          value={value.externalInput}
          onChange={handleLocalInputChange}
        />
      </label>
    </div>
  );
}

export default SimpleInputContainer;
