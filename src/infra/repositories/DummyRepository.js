import BaseRepository from "./BaseRepository";

class DummyRepository extends BaseRepository {
  constructor({
    cache,
    models: { Dummy },
  }) {
    super({ Model: Dummy });
    this.Todo = Dummy;
  }

  /**
   * Create a todo
   * @param { Object } payload
   * @returns {Promise}
   * @memberof DummyRepository
   */
  async create(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const { subject, note } = payload;
        const response = await this.runInTransaction(async (session) => {
          const dummy = this.createDoc({ subject, note }, session);

          return dummy;
        });

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default DummyRepository;
