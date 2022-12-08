import BookUserService from '@/services/books-user.service';

class BookUserController {
  public bookUserService = new BookUserService();

  public addBookmark = async (req, res, next) => {
    try {
      const { bookId } = req.params;
      const { id: userId } = req.user;
      await this.bookUserService.bookmarkBook(Number(bookId), userId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  };

  public removeBookmark = async (req, res, next) => {
    try {
      const { bookId } = req.params;
      const { id: userId } = req.user;
      await this.bookUserService.removeBookmark(Number(bookId), userId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  };

  public getBookmarks = async (req, res, next) => {
    try {
      const { id: userId } = req.user;
      const bookmarks = await this.bookUserService.getBookmarks(userId);
      res.status(200).json({ data: bookmarks, message: 'bookmarks' });
    } catch (error) {
      next(error);
    }
  };
}

export default BookUserController;
