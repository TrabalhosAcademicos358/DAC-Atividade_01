const messageError = (error) => {
    const message = error.message;
  
    const prismaIdentifier = "\nInvalid `prisma";
    if (message && message.startsWith(prismaIdentifier)) {
      return message.split("\n\n").at(-2);
    }
  
    const unauthorizedIdentifier = "Unauthorized";
    if (message && message.startsWith(unauthorizedIdentifier)) {
      res.status(401);
    }

    return message;
}

const handleError = (error, req, res, next) => {
    res.status(500);
    console.error(error);
  
    const message = messageError(error)
  
    res.json({ message, success: false });
}

export default handleError