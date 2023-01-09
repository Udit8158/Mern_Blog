import { v4 as uuidv4 } from "uuid";

const addComment = (req, res) => {
  const { user } = req;
  const { blogId } = req.params;
  const { text } = req.body;

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const comment = { text, author: user.name };
};

export default addComment;
